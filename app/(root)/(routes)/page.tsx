import { UserButton } from "@clerk/nextjs"

import SearchInput from "@/components/search-input"

const RootPage = () => {
  return (
    <div className="h-full p-4 spacey-y-2">
      <SearchInput />
    </div>
  )
}

export default RootPage
