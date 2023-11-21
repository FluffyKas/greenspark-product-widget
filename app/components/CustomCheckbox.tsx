import Link from 'next/link';

export const CustomCheckbox = () => {
  return (
    <form className="flex justify-between pt-[0.84rem]">
      <label className="form-control">
        <Link href="#" className="text-greenspark_green hover:text-greenspark_green_hover">
          Link to Public Profile
        </Link>
      </label>
      <input type="checkbox" name="checkbox" />
    </form>
  );
};
