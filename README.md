# SuperBuidl

Community-oriented payment management platform for DAO workers with continuous payment through Superfluid governed by UMA Oracle

### Project Description

Our core idea is to decentralize/democratize control of Superfluid money stream(CFA) by UMA’s optimistic oracle. Traditionally, Superfluid money stream is controlled by ACL(Access Control List), which we have to trust those listed entities(wallet addresses).

In our platform:

1. In given DAOs(e.g. BuidlGuidl), contributors are working with pre-second fee powered by SuperFluid. (e.g. $0.033/second, over next 1 month)
2. Contributors have to submit his progress within a certain interval(e.g. daily, weekly) publicly open.
3. Contributors get paid with Superfluid money stream from DAO Treasury.
4. Other community members continuously check his work provided step2.

To create/update/delete the money stream, the corresponding statement of UMA oracle must be settled and “true”. For example, to delete the money stream, someone in the community claims that “A has stopped working(no recent progress submission) anymore” and is settled as a true statement through UMA.

Checkout our project on ETHGlobal: https://ethglobal.com/showcase/superbuidl-platform-4am37

Built with [Scaffold-ETH 2](https://github.com/scaffold-eth/scaffold-eth-2) ❤️
