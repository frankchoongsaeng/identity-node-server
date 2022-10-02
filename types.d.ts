
// PROFILE MODEL;
type ProfileId = string

interface Profile {
	id?: ProfileId
	profileDescription: string
	firstName?: string
	middleName?: string
	lastName?: string
	email?: string
	password?: string
}

// PLATFORM
type Url = string

interface Platform {
	url: Url
	siteTitle: string
	lastUsedProfile: Profile
	profiles: ProfileId[]
}

// USER MODEL;
interface User {
	id?: string
	username: string
	email: string
	firstName?: string
	middleName?: string
	lastName?: string
	platforms: Map<Url, Platform>
	profiles: Map<String, Profile>
}
