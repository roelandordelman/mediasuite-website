---
title: Who can access the Media Suite?
position: 5
---

Only **researchers** that are working at secondary vocational-, higher education and research institutions in the Netherlands can log in using the employee account of their institution. The CLARIAH infrastructure can authenticate you using the **SURF federated identity management service** for secondary vocational-, higher education and research in the Netherlands that connects these institutions with CLARIAH. [Here](https://support.surfconext.nl/stats/idplist.html) is a list of institutions (called "IdP" - Identity provider) that are part of this federation. Your organisation should be on the list if you want to log in as a researcher.

> There is one exception to the rule that only researchers can log in and that is for **collection owners**. They can log into the Media Suite to access their own collections and help us with the maintenance and improvement of the data.

## Why log in?

In order to be able to use **all features** of the CLARIAH Media Suite, you need to log in. After log in, you will be able to use the workspace to create projects, make annotations, store and share information. Also, you will be able to access data collections that are only available for researchers for reasons of copyright (only research use is permitted) or privacy (see our post on [research data management](https://mediasuite.clariah.nl/documentation/glossary/rdm)).

> Without logging in, you can still search and browse collections that have **no copyright or privacy restrictions** and are publicly available. However, you cannot use the 'scholarly features' such as creating projects and making annotations.  

## How do we provide log in functionality?

When you log in, this means that we can '**authenticate**' you, we know who you are in the sense that we know that you are working at a secondary vocational-, higher education or research institution in the Netherlands. Or that you are an employee of an institute that provides data (collection owner). We don't know your name for example. Based on the 'authentication' we can now '**authorise**' you to access collections that are not open access (for copyright or privacy reasons) and only available for research purposes. We currently follow a generic authorisation approach that provides access to all scholars. However, collections exists that require more detailed authorisation protocols, such as excluding students or authorisation for individual scholars. We are working on an authentication & authorisation mechanism that allows both generic and specific protocols.

CLARIAH outsources authentication to [SurfConnext](https://www.surf.nl/en/services-and-products/surfconext/index.html), a service offered by SURF, an  ICT organisation for Dutch education and research. Students, teachers and researchers with an institutional account can log in to the Media Suite via SURFConext.

Limited access to the Media Suite can occur when:

- **When your institution does not appear in the SURFConext list**: This happens when you are prompted to the login page of The Media Suite, you search for your institution in the search box, and your institution is not listed there. Most academic and research institutions in the Netherlands are connected with SURFConext. If your institution is not in the list, this means your institution is not connected. This issue has to be solved by the Dutch university or research institution to which the researcher belongs to. Your institution also has to connect to the CLARIN service (that the Media Suite belongs to), in the local SURFconext settings. If your institute is not listed in the Media Suite, you have to ask your local ICT helpdesk to make this connection. Every institution has one or more SURFcontext maintainers/responsibles who should be able to do this for you. To start, you can find information here: [SURFconext wiki](https://wiki.surfnet.nl/display/conextsupport/Wat+is+SURFconext); and [Surf Trust and Identity website](https://www.surf.nl/expertises/trust-en-identity).
- **When you don't have a Dutch institutional affiliation**: This happens when you find the institution in the SURFconext list, but you don't have valid credentials to log in. In Version 3, it is currently impossible to use the Media Suite without institutional credentials. We are working towards a  solution for this situation  in future versions.
- **When a non-Dutch institution wants to have access to the Media Suite**: This is impossible in Media Suite version 3. A possible solution may be to ask a Dutch host institution listed in the SURFConext institutions to create a temporary institutional account.

***Update April 5, 2019***: in CLARIAH Plus we are working towards facilitating the authentication procedure  via CLARIN-EU, which means that all CLARIN member institutes in Europe will get access.

See also: [How to log in](http://mediasuite.clariah.nl/documentation/howtos/login)
