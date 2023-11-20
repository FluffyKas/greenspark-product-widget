import Link from 'next/link';

export const CustomCheckbox = () => {
  return (
    <>
      <label className="form-control">
        <Link href="#" className="text-greenspark_green hover:text-greenspark_green_hover">
          Link to Public Profile
        </Link>
      </label>
      <input type="checkbox" name="checkbox" />
    </>
  );
};
