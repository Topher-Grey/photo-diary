# Moment Escape

A website where the user is able to login,
upload their photo, and add a diary message

Maybe this all comes down to moments of acting
but in a way we all escape when reality
presents itself. The truth behind every experession
is released and we see the light for what it is.
When we lay next to someone and we begin
to match their breath. The silence fills
our hearts and we can't leave their side.

However, once you have been conditioned by those
you love. The vibrations that make up our moments
of life condition us to not let go of instinct to search
for the same happiness throughout oour life.
In a moments escape, you can find a place
to log your memories of past events,
or fleeting memories while they 
shape the moments of your life.

_________________________________________________________

_________________________________________________________

Users will be able to login after they register. They then will have an index of the 3 most recent entries when they enter the site. Their will be a search bar that will look for keywords that the user adds to their photo diary entry. Each photo will have a text entry that can be used to describe the moment or just talk about the day. The date will autopopulate to each entry, and users can share entries publicly.

_________________________________________________________

_________________________________________________________

User Model:
username (email address)
display_name
first_name
last_name
birthday

Photo Model:
user (from user model)
photo_name
description
keyword(s) <-- being a single field or multiple fields will depend on search tools, possibly will be an array of strings
URL <-- I believe this field will be able to stay the same if someone uploads the photo or links it from a service like Flickr


Journal Model:
user (from user model)
photo (from photo model)
date_created
journal_date <-- this will be when the user experienced the event as they may upload the photo a few days later
title
keyword(s) <-- like photo model, will allow for searching for entries that don't include a photo but might be a poem or story
journal_entry <-- the text of the journal posting
public <-- Boolean if it should be shared with others






