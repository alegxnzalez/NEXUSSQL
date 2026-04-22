// HAZMAT_TRANSPORT_MESSAGE.js

window.HAZMAT_TRANSPORT_MESSAGE = {
  "tables": {
    "HAZMAT_TRANSPORT_MESSAGE": {
      "columns": {
        "HAZMAT_TRANSPORT_MSG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The hazardous transport message identifier. "
        },
        "HAZMAT_TRANSPORT_MSG_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID "
        },
        "MESSAGE": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "The hazardous transport message."
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
        "HAZMAT_ITEM"
      ]
    }
  }
};
