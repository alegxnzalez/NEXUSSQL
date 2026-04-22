// MAIL_PGROUP_PROFILE.js

window.MAIL_PGROUP_PROFILE = {
  "tables": {
    "MAIL_PGROUP_PROFILE": {
      "columns": {
        "MAIL_PGROUP_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "MAIL_PGROUP_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
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
        "MAIL_PGROUP_PROF_CONT",
        "MAIL_PGROUP_PROF_FUNCT",
        "MAIL_PGROUP_PROF_MISC",
        "MAIL_PGROUP_PROF_SUBJ",
        "MAIL_PRIORITY_GROUP"
      ]
    }
  }
};
