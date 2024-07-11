import { CardBody, CardContainer, CardItem } from "/src/components/ui/3d-card";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="relative">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-[16.5rem] rounded-[1.6rem] p-9 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Economic Welfare
        </CardItem>
        <CardItem
          as="p"
          translateZ="30"
          className="text-neutral-500 text-sm max-w-sm mt-1 dark:text-neutral-300"
        >
          Infos...
        </CardItem>

        <div className="flex justify-between items-center mt-[6.2rem]">
          <CardItem
            translateZ={20}
            src="https://github.com/OsemaFadhel"
            target="__blank"
            className="px-3 py-3 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
