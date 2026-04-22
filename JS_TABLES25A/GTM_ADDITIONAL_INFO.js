// GTM_ADDITIONAL_INFO.js

window.GTM_ADDITIONAL_INFO = {
  "tables": {
    "GTM_ADDITIONAL_INFO": {
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
        "GTM_ADDITIONAL_INFO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GTM additional info GID "
        },
        "GTM_ADDITIONAL_INFO_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GTM additional info XID "
        },
        "GTM_ADDITIONAL_INFO_NAME": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "GTM additional info NAME "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "GTM additional info description "
        },
        "CODE": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "GTM additional info code "
        },
        "TEXT": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "when additional info is added on declaration line this text will defaults on declaration line and user can change based on is_modifiable flag "
        },
        "IS_MODIFIABLE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "if 'Y' the text_override field in additional info grid in declaration line for this additional info should be editable else readonly "
        },
        "GTM_DECL_TYPE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_DECL_TYPE_PROFILE",
          "info": "declaration type profile gid"
        }
      },
      "fk_tables": [
        "GTM_TL_ADDITIONAL_INFO"
      ]
    }
  }
};
