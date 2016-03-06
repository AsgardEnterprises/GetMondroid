# GetMondroid
Mondo! iOS only. Until now!

## What does it do?

Lists your recent transactions. It's not very pretty, nor usable unless you happen to have your Mondo JWT and Account number on hand. But that does matter because of the context below.

## Context

This was a super fast submission for a Mondo hackathon run by codebar, where a coach and some aspiring software students quickly put together something using Mondo's API.

While lots of fun ideas existed, the real thing we wanted to tackle was the closed-offness of the Mondo ecosystem. At the time of writing it only supported iOS9 meaning that not only could the product only be consumed by fairly privileged people, it could also only be developed for by the kind of folks who happen to have access to an Apple computer.

None of the students had any Apple devices - so we sought to break that barrier.

A huge amount of our effort went into creating a development and build chain that could run on terrible laptops and create apps that would run on aged Android devices.

In the end, we managed to get a decently performant pipeline going on a laptop with 2GB of RAM, outputting a working app to a Samsung Galaxy S2 mini.

Then we very, very quickly dove into modifying an example project to list your recent Mondo transactions - and it works! That's the project you see above.

We plan to write up the hacks and methodology to achieve all this in the near future.
