// MAIL_PRIORITY_GROUP.js

window.MAIL_PRIORITY_GROUP = {
  "tables": {
    "MAIL_PRIORITY_GROUP": {
      "description": "A grouping for mail prioritization in quota management.",
      "columns": {
        "MAIL_PRIORITY_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Group ID"
},
        "MAIL_PRIORITY_GROUP_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "PRIORITY_LEVEL": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Relative priority for e-mails in the group. A null priority is lower than all others."
},
        "MAIL_PGROUP_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "MAIL_PGROUP_PROFILE",
          "info": "Profile holding the list of notify functions, subjects and contacts associated with this group."
},
        "WARN_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "MAIL_PRIORITY_PROFILE",
          "info": "A threshold and distribution list for quota warnings."
},
        "BLOCK_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "MAIL_PRIORITY_PROFILE",
          "info": "A threshold and distribution list for quota blocks."
},
        "IS_PERSIST_ON_BLOCK": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "If Y, blocked e-mails should be persisted for later distribution. If N, they are lost with a log warning."
},
        "DROP_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "MAIL_PRIORITY_PROFILE",
          "info": "A threshold and distribution list for lost e-mails due to flooding the blocked queue."
},
        "IS_ACTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "If Y, the group is active and used for mail quotas. Otherwise, the definition is ignored."
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true
}
      },
      "fk_tables": []
    }
  }
};