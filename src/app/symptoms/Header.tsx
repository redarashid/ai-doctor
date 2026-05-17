interface HeaderProps {
  selectCategory: string;
  describe: string;
  chooseSystem: string;
}

export default function Header({
  selectCategory,
  describe,
  chooseSystem,
}: HeaderProps) {
  return (
    <div className="mb-6 text-center">
      <h1 className="text-2xl pt-10 font-bold text-[#111827] md:text-3xl">
        {selectCategory}
      </h1>

      <p className="mb-3 mt-2 text-lg font-semibold text-blue-600 md:text-xl">
        {describe}
      </p>

      <p className="text-sm text-gray-500">{chooseSystem}</p>
    </div>
  );
}
