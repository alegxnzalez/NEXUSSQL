// GTM_PROCEDURE.js

window.GTM_PROCEDURE = {
  "tables": {
    "GTM_PROCEDURE": {
      "columns": {
        "GTM_PROCEDURE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Procedure GID "
        },
        "GTM_PROCEDURE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Procedure ID "
        },
        "GTM_PROCEDURE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_PROCEDURE_TYPE",
          "info": "Procedure Type ID "
        },
        "GTM_PROCEDURE_NAME": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "Procedure Name "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Procedure Description "
        },
        "CODE": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "Procedure Code "
        },
        "IS_PRIOR_PROCEDURE_ONLY": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Is only a Prior Procedure "
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
          "info": "declaration type profile gid"
        }
      },
      "fk_tables": [
        "GTM_ALLOW_PRIOR_PROCEDURE",
        "GTM_ENTRY_EXIT_PROF_PROC",
        "GTM_TIP_ALLOWED_PROCEDURES",
        "GTM_TIP_AUTH_PROCEDURE",
        "GTM_TIP_INVENTORY",
        "GTM_TIP_INV_MOVEMENT",
        "GTM_TRANSACTION",
        "GTM_TRANSACTION_LINE"
      ]
    }
  }
};
