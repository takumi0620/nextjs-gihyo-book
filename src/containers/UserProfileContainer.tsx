import UserProfile from "components/organisms/UserProfile"
import useUser from "services/users/use-user"
import type { ApiContext, User } from "types/data"

const context: ApiContext = {
  apiRootUrl: process.env.NEXT_PUBLIC_API_BASE_PATH || "/api/proxy"
}

interface UserProfileContainerProps {
  userId: number
  user?: User
}

const UserProfileContainer = ({
  userId,
  user
}: UserProfileContainerProps) => {
  const { user: u } = useUser(context, { id: userId, initial: user })

  if (!u) return <div>Loading...</div>

  return (
    <UserProfile
      username={`${u.username} (${u.displayname})`}
      profileImageUrl={u.profileImageUrl}
      numberOfProducts={100}
      description={u.description}
    />
  )
}

export default UserProfileContainer