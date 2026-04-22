// SHIP_UNIT_SPEC_PROFILE.js

window.SHIP_UNIT_SPEC_PROFILE = {
  "tables": {
    "SHIP_UNIT_SPEC_PROFILE": {
      "columns": {
        "SHIP_UNIT_SPEC_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "SHIP_UNIT_SPEC_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": true
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(256)",
          "nullable": true
        },
        "IS_COMPATIBLE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
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
        "ACTIVITY_TIME_DEF",
        "LOCATION_ROLE_PROFILE",
        "NFRC_RULE",
        "OB_LINE",
        "ORDER_RELEASE_LINE",
        "PACKAGED_ITEM",
        "SHIP_UNIT_SPEC_PROFILE_D",
        "TRANSPORT_MODE"
      ]
    }
  }
};
