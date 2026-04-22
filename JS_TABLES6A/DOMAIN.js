// DOMAIN.js

window.DOMAIN = {
  "tables": {
    "DOMAIN": {
      "columns": {
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true
        },
        "IS_CHILD_DOMAIN": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "DOMAIN_ROLE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DOMAIN_ROLE",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "DEFAULT_USER_ROLE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "USER_ROLE"
        },
        "DOMAIN_PARTITION_KEY": {
          "type": "NUMBER()",
          "nullable": true
        },
        "G_REFERENCE_DOMAIN": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "foreign_key": "DOMAIN"
        },
        "DOCUMENT_USE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DOCUMENT_USE_PROFILE",
          "info": "Default profile defining document upload and view for all users in the domain"
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
        "APP_SERVER_DOMAIN",
        "AUDIT_CONTROL",
        "DOMAIN",
        "DOMAIN_PROFILE_D",
        "GTM_AUDIT_CONTROL_SERVICE"
      ]
    }
  }
};
