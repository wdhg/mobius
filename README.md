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

When merged, the build pipeline will automatically update the webring page.

To link back to the webring, add the following line to your website:

```html
<a href='https://mobius.wdhg.me'><img src='https://mobius.wdhg.me/mobius_white_64.png'/></a>
```

In the future I might add optional parameters for fun (e.g. university, subject/s, etc).

## Rules

1. You must be (or have been) an active member of a UK university.
2. Members should link back to the webring from their websites (this is not enforced for now).
3. Your link should point to your personal site, but if you do not have one then a GitHub profile or equivalent is acceptable.
