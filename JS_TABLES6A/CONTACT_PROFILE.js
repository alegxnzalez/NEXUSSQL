// CONTACT_PROFILE.js

window.CONTACT_PROFILE = {
  "tables": {
    "CONTACT_PROFILE": {
      "columns": {
        "CONTACT_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The unique identifier of contact profile. "
        },
        "CONTACT_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID of the contact profile. "
        },
        "CONTACT_PROFILE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "The name of the contact profile. "
        },
        "IS_COMPATIBLE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Whether or not this is a compatible contact profile."
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
        "APPT_RULE_SET",
        "CONTACT_PROFILE_DETAIL",
        "DM_RULE",
        "LOCATION_RESOURCE",
        "SECONDARY_CHARGE_RULE"
      ]
    }
  }
};
