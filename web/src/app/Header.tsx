import { ThemeForceToggle } from "./ThemeForceToggle"

export default function RoutHeader() {
    return(
      <div className="h-[50px] flex justify-end items-center px-[6px]">
          <ThemeForceToggle/>
          <div>search</div>
          <div>profile</div>
      </div>
    )
}