// SHIPMENT_REQDOC_TEXT.js

window.SHIPMENT_REQDOC_TEXT = {
  "tables": {
    "SHIPMENT_REQDOC_TEXT": {
      "columns": {
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored. "
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user. "
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert. "
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user. "
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update. "
        },
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIPMENT_REQDOC",
          "info": "The shipment GID. "
        },
        "DOCUMENT_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIPMENT_REQDOC",
          "info": "The required document type. "
        },
        "TEXT_TEMPLATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "TEXT_TEMPLATE",
          "info": "The text template ID. "
        },
        "S_SHIP_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "S_SHIP_UNIT",
          "info": "If the text is associated with a ship unit or ship unit line, this holds the ship unit ID. "
        },
        "S_SHIP_UNIT_LINE_NO": {
          "type": "NUMBER()",
          "nullable": true,
          "foreign_key": "S_SHIP_UNIT_LINE",
          "info": "If the text is associated with a ship unit line, this holds the ship unit line number."
        }
      },
      "fk_tables": []
    }
  }
};
