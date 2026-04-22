// USER_ROLE.js

window.USER_ROLE = {
  "tables": {
    "USER_ROLE": {
      "columns": {
        "USER_ROLE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "USER_ROLE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "GL_LEVEL": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "DATA_SOURCE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "DATA_SOURCE_PROFILE"
        },
        "VPD_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "VPD_PROFILE"
        },
        "VPD_CONTEXT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "VPD_CONTEXT"
        },
        "VPD_DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": true
        },
        "IS_RESERVED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If Y, the user role is reserved by OTM: it cannot be deleted"
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
        "AGENT",
        "APP_ACTION_MORG_ACCESS",
        "DOMAIN",
        "GL_USER",
        "ROLE_ROLE_GRANT",
        "USER_ACCESS",
        "USER_ROLE_ACR_ROLE",
        "USER_ROLE_GRANT"
      ]
    }
  }
};
