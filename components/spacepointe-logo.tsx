export function SpacePointeLogo() {
  return (
    <div className="flex items-center gap-2">
      <div aria-hidden="true" className="relative h-7 w-7">
        <span className="absolute left-0 top-1 h-6 w-1.5 skew-x-[-32deg] rounded-[2px] bg-white" />
        <span className="absolute left-2.5 top-0 h-7 w-1.5 skew-x-[-32deg] rounded-[2px] bg-[#18c6de]" />
        <span className="absolute left-5 top-1 h-6 w-1.5 skew-x-[-32deg] rounded-[2px] bg-[#18c6de]/85" />
      </div>
      <span className="text-[1rem] font-black tracking-tight text-white sm:text-[1.1rem]">
        Space<span className="text-[#18c6de]">Pointe</span>
      </span>
    </div>
  )
}
