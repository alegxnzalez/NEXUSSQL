// MAIL_AUDIT_PROFILE.js

window.MAIL_AUDIT_PROFILE = {
  "tables": {
    "MAIL_AUDIT_PROFILE": {
      "description": "A rule for auditing and/or persisting a group of emails.",
      "columns": {
        "MAIL_AUDIT_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Mail Audit Profile ID."
},
        "MAIL_AUDIT_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Mail Audit Profile XID."
},
        "MAIL_PGROUP_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "MAIL_PGROUP_PROFILE",
          "info": "Mail Profile Group, providing the set of emails handled by this rule."
},
        "IS_ACTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Y, if the rule is active."
},
        "IS_RESERVED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Y, if the rule is reserved and cannot be modified."
},
        "RANK": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The relative ranking of importance when this profile match audits or persists an email."
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
      "fk_tables": [
        "MAIL_AUDIT",
        "MAIL_AUDIT_PROF_PERSIST",
        "MAIL_BLOCKED_MSG_APROF"
]
    }
  }
};