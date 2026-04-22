// ACR_ROLE.js

window.ACR_ROLE = {
  "tables": {
    "ACR_ROLE": {
      "columns": {
        "ACR_ROLE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "ACR_ROLE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "IS_MUTABLE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If Y, the entry point and child role assignments can be modified by the user."
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
        "ACR_ROLE_ENTRY_POINT",
        "ACR_ROLE_ROLE",
        "GL_USER_ACR_ROLE",
        "USER_ROLE_ACR_ROLE"
      ]
    }
  }
};
