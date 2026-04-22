// ORDER_RELEASE_LINE_ACCESSORIAL.js

window.ORDER_RELEASE_LINE_ACCESSORIAL = {
  "tables": {
    "ORDER_RELEASE_LINE_ACCESSORIAL": {
      "description": "This table contains the link to accessorial table to define the accessories required at the line item level for the order release. It supercedes the accessories defined at the line items at the order base level.",
      "columns": {
        "ORDER_RELEASE_LINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ORDER_RELEASE_LINE",
          "info": "A unique identifier to define the multiple order release lines per order release. The gid has the domain portion."
},
        "ACCESSORIAL_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ACCESSORIAL_CODE",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
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
        "ORL_ACCESSORIAL_REMARK"
]
    }
  }
};