// MATCH_VALID_RULE_PROFILE.js

window.MATCH_VALID_RULE_PROFILE = {
  "tables": {
    "MATCH_VALID_RULE_PROFILE": {
      "columns": {
        "MATCH_VALID_RULE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Id for the match validation rule group or profile "
        },
        "MATCH_VALID_RULE_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(255)",
          "nullable": true,
          "info": "Optional user description for the profile "
        },
        "IS_DEFAULT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If this is checked (value=Y), this profile will be used if the validate actio is run on an invoice and the service provider on the invoice does not have a profile specified."
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
        "MATCH_VALID_RULE_PROFILE_D",
        "SERVPROV"
      ]
    }
  }
};
