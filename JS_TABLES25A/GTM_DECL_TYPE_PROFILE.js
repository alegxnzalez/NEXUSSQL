// GTM_DECL_TYPE_PROFILE.js

window.GTM_DECL_TYPE_PROFILE = {
  "tables": {
    "GTM_DECL_TYPE_PROFILE": {
      "columns": {
        "GTM_DECL_TYPE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Declaration Type Profile GID "
        },
        "GTM_DECL_TYPE_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Declaration Type Profile ID "
        },
        "PROFILE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Declaration Type Profile Name "
        },
        "IS_COMPATIBLE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Is Declaration Type Profile Compatible"
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
        "GTM_ADDITIONAL_INFO",
        "GTM_COMPLIANCE_RULE",
        "GTM_DECL_S_TYPE",
        "GTM_DECL_TYPE_PROFILE_D",
        "GTM_ENTRY_EXIT_PROFILE",
        "GTM_PROCEDURE",
        "GTM_PROCEDURE_DETAIL",
        "GTM_PROD_DOC_TYPE"
      ]
    }
  }
};
