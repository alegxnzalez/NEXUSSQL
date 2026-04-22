// GL_USER_ACR_ROLE.js

window.GL_USER_ACR_ROLE = {
  "tables": {
    "GL_USER_ACR_ROLE": {
      "columns": {
        "GL_USER_GID": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GL_USER",
          "info": "User ID "
        },
        "ACR_ROLE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ACR_ROLE",
          "info": "Access Control Role "
        },
        "IS_GRANTED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If Y, the entry points in the role are granted to the user, otherwise they are denied"
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
      "fk_tables": []
    }
  }
};
