// GTM_TYPE_CODE_PROFILE.js

window.GTM_TYPE_CODE_PROFILE = {
  "tables": {
    "GTM_TYPE_CODE_PROFILE": {
      "columns": {
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
        },
        "GTM_TYPE_CODE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "User Defined Type Code Profile Gid "
        },
        "GTM_TYPE_CODE_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "User Defined Type Code Profile Xid "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "Description of the User Defined Type Code Profile "
        },
        "IS_COMPATIBLE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Identifies if the compatiblity of Type Code listed in the Details table. "
        },
        "OBJECT_TYPE": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "values": [
            "TRADE_TRANSACTION",
            "TRADE_ITEM_STRUCTURE",
            "CONTACT"
          ],
          "info": "Object Type for the User Defined Type Code Profile."
        }
      },
      "fk_tables": [
        "GTM_COMPLIANCE_RULE_GROUP",
        "GTM_TYPE_CODE_PROFILE_D"
      ]
    }
  }
};
