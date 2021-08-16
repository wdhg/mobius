# mobius

A modern webring for universities.

## What / why?

Webrings are an old but cool method of connecting websites, usually of similar theme / content. The main goal of this webring is to connect the personal sites of students, alumni, and researchers from Imperial College London, however people from other universities are also welcome to join as well.

The webring contains a list of links to each members site and (ideally) each member links back to the webring from their site. This allows people to easliy discover new but similar websites if they happen to discover one of them.

## How can I join?

Fork this repo and submit a pull request adding your site to the end of the list of sites in [sites.toml](sites.toml):

```toml
#...

# add the following
[[sites]]
name = "<YOUR NAME HERE>" # required
url = "<YOUR URL HERE>"   # required

# EOF
```

(In the future I might add extra fields e.g. university, subject/s, etc).

When merged, the build pipeline will automatically update the webring page.

To link back to the webring, add one of the following lines to your website:

```html
<!-- For a black logo -->
<a href='https://mobius.wdhg.me'><img src='https://mobius.wdhg.me/mobius_64.png'/></a>
<!-- For a white logo --> 
<a href='https://mobius.wdhg.me'><img src='https://mobius.wdhg.me/mobius_white_64.png'/></a>
```

Each coloured icon comes in two sizes (64px and 128px) and as vector graphics (see [public](public))


## Rules

1. You must be (or have been) an active member of a UK university.
2. Members should link back to the webring from their websites (this is not enforced for now).
3. Your link should point to your personal site, but if you do not have one then a GitHub profile or equivalent is acceptable.
