import { ChangeEvent, useState } from 'react';
import { uploadFile } from '@/api/cloudinary/cloudinary';
import Button from '@/components/UI/Button';
import { Product } from '@/api/firebase/types';
import { saveProduct } from '@/api/firebase/firebase';

const NewProduct = () => {
  const [product, setProduct] = useState<Product>({} as Product);
  const [image, setImage] = useState<File | null>(null);
  const [isUpload, setUpload] = useState(false);
  const [success, setSuccess] = useState('');
  const inputList = [
    {
      name: 'name',
      placeholder: '제품명',
    },
    {
      name: 'price',
      placeholder: '가격',
    },
    {
      name: 'category',
      placeholder: '카테고리',
    },
    {
      name: 'description',
      placeholder: '제품 설명',
    },
    {
      name: 'option',
      placeholder: '제품 옵션',
    },
  ];

  const hanldeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;

    if (name === 'image') {
      setImage(files && files[0]);
      return;
    }

    if (name === 'option') {
      setProduct((prev) => ({ ...prev, option: value.split(',') }));
    }

    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (image) {
      setUpload(true);
      const url = await uploadFile(image);
      await saveProduct({
        ...product,
        image: url,
      });
      setSuccess('✅ 성공적으로 상품이 등록되었습니다.');
      setUpload(false);

      setTimeout(() => {
        setSuccess('');
      }, 4000);
    }
  };

  return (
    <section>
      <form className="flex flex-col p-12" onSubmit={handleSubmit}>
        <div className="flex flex-col items-center">
          <h1>새로운 제품 등록</h1>
          {success && <h2>{success}</h2>}
          {image && (
            <img
              className="w-[30%]"
              src={URL.createObjectURL(image)}
              alt="제품 이미지"
            />
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          name="image"
          onChange={hanldeChange}
          required
        />
        {inputList.map(({ name, placeholder }, idx) => (
          <input
            key={idx}
            type="text"
            name={name}
            placeholder={placeholder}
            onChange={hanldeChange}
            required
          />
        ))}
        <Button text={isUpload ? '제품 등록 중...' : '제품 등록하기'}></Button>
      </form>
    </section>
  );
};

export default NewProduct;
