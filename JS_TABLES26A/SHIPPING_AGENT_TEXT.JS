// SHIPPING_AGENT_TEXT.js

window.SHIPPING_AGENT_TEXT = {
  "tables": {
    "SHIPPING_AGENT_TEXT": {
      "columns": {
        "SHIPPING_AGENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIPPING_AGENT"
},
        "TEXT_TEMPLATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "TEXT_TEMPLATE"
},
        "DOCUMENT_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DOCUMENT_DEF",
          "info": "Document that should hold text"
},
        "TEXT_OVERRIDE": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Transactional override for the template on the specific document"
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