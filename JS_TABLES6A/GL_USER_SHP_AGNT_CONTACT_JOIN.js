// GL_USER_SHP_AGNT_CONTACT_JOIN.js

window.GL_USER_SHP_AGNT_CONTACT_JOIN = {
  "tables": {
    "GL_USER_SHP_AGNT_CONTACT_JOIN": {
      "columns": {
        "GL_USER_GID": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GL_USER",
          "info": "this field is used to associate GL USER with Shipping Agent Contact. "
        },
        "SHIPPING_AGENT_CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "SHIPPING_AGENT_CONTACT",
          "info": "this field is used to associate a GL USER with a Shipping Agent Contact."
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
