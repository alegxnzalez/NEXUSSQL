// MAIL_PGROUP_PROF_EMAIL.js

window.MAIL_PGROUP_PROF_EMAIL = {
  "tables": {
    "MAIL_PGROUP_PROF_EMAIL": {
      "columns": {
        "MAIL_PGROUP_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "MAIL_PGROUP_PROFILE",
          "info": "Mail Priority Group Profile ID. "
        },
        "EMAIL_ADDRESS": {
          "type": "VARCHAR2(320)",
          "nullable": false,
          "key_value": true,
          "info": "Email address belonging to a mail priority group profile."
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
