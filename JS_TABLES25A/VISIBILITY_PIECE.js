// VISIBILITY_PIECE.js

window.VISIBILITY_PIECE = {
  "tables": {
    "VISIBILITY_PIECE": {
      "columns": {
        "VISIBILITY_PIECE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "VISIBILITY_PIECE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "VISIBILITY_SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "PIECE_DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "PIECE_REFERENCE": {
          "type": "VARCHAR2(128)",
          "nullable": true
        },
        "LAST_EVENT_EVENT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "VISIBILITY_EVENT_TYPE"
        },
        "LAST_EVENT_UPDATE_DATE": {
          "type": "DATE",
          "nullable": true
        },
        "P_DATE_KEY": {
          "type": "NUMBER()",
          "nullable": true
        },
        "STATUS": {
          "type": "VARCHAR2(100)",
          "nullable": true,
          "info": "Status of the piece as defined by the last event received for the piece "
        },
        "LAST_EVENT_DATE_OFFSET": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The UTC offset for the last EVENT_DATE"
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
