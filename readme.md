# Documentation

Identities is a tool that allows web users to track multiple profiles accross multiple platforms

# Motivation

This project was born out of a need to remember what usernames, first name, last name, middle name, email, etc was used on what platform.
This project is currently a personal project that is open to contributions or use.

## Profiles

A user must be registered on a platform.
This requires the user to create a profile with us and this
profile becomes the Master Profile.

A master profile is automatically created when a new user's account is created.
The description for the master profile is, surprisingly 🙄, **'Master Profile'**.

The master profile may be used for other platforms. However, Like any other profile managed
by identities, if the master profile is used on a platform then a copy of the master profile
is created and assigned to the platform with the title '[Platform Title] Profile - Created from Master Profile'.

### Profile Relationships

Profiles have no relationships between them. All profiles are related to a platform and managed
independently. Using an already existing profile (that may already be in use for one platform)
for a new patform always creates a copy of the old profile.
The reasoning behind this is that there is actually no logical relationship between profiles because profiles
are managed by/from platforms.
