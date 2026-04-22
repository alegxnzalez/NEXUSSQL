// GTM_PROD_DOC_TYPE.js

window.GTM_PROD_DOC_TYPE = {
  "tables": {
    "GTM_PROD_DOC_TYPE": {
      "columns": {
        "GTM_PROD_DOC_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Gid "
        },
        "GTM_PROD_DOC_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Produced Document Type ID "
        },
        "GTM_PROD_DOC_TYPE_NAME": {
          "type": "VARCHAR2(256)",
          "nullable": true
        },
        "CODE": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "Produced Document Type Code "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Produced Document Type Description "
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
        },
        "GTM_DECL_TYPE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_DECL_TYPE_PROFILE",
          "info": "declaration profile type gid"
        }
      },
      "fk_tables": [
        "GTM_TRANS_LINE_PROD_DOC"
      ]
    }
  }
};
