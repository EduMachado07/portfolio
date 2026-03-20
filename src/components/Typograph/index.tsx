const Title = ({ text }: { text: string }) => {
  return (
    <h1 className="dark:text-[#3399FF] text-[#226EBA] font-chubbo-bold md:text-2xl text-xl -mb-6 w-full">
      {text}
    </h1>
  );
};

export const Typograph = {
  Title: Title,
};
