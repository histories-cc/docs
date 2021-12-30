---
sidebar_position: 2
title: Rest
---

# Rest API

- `/api/deleteUnauthorized` on load deletes new users that are more than three days without verified email address. (used instead cron job)
- `/api/updateHashes` updates `/hashes.txt`
- In `/hashes.txt` are all [IPFS hashes](https://docs.ipfs.io/concepts/hashing/) which you can pin.