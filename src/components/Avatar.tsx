import { User } from 'firebase/auth';

const Avatar = ({ user }: { user: User }) => {
  return (
    <div className="flex items-center">
      <img
        className="rounded-full w-8 h-8 mr-1"
        src={user.photoURL || undefined}
        alt={user.displayName || 'photo'}
      />
      <span className="hidden md:block">{user.displayName}</span>
    </div>
  );
};

export default Avatar;
