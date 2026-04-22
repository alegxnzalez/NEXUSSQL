// SHIPPING_AGENT_CONTACT_NOTE.js

window.SHIPPING_AGENT_CONTACT_NOTE = {
  "tables": {
    "SHIPPING_AGENT_CONTACT_NOTE": {
      "description": "Provides the ability to specify notes related to an agent.",
      "columns": {
        "SHIPPING_AGENT_CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIPPING_AGENT_CONTACT",
          "info": "The agent contact this note is related to."
},
        "SHIP_AGENT_CONT_NOTE_SEQ_NO": {
          "type": "NUMBER(10)",
          "nullable": false,
          "key_value": true,
          "info": "Sequence number for primary key"
},
        "NOTE_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "The date and time the note was created."
},
        "NOTE": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "The actual text of the note."
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