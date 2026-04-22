// DATA_INFO.js

window.DATA_INFO = {
  "tables": {
    "DATA_INFO": {
      "description": "This table is used to store table level data change information",
      "columns": {
        "DATA_INFO_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true
},
        "TABLE_NAME": {
          "type": "VARCHAR2(100)",
          "nullable": false
},
        "ACTION": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "values": [
                    "CREATE",
                    "UPDATE",
                    "DELETE"
          ]
},
        "PK_VALUE": {
          "type": "VARCHAR2(1500)",
          "nullable": true
},
        "MARKED_FOR_PURGE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "A boolean field.  When it is set to 'Y', this row and its child data will be purged."
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
        "DATA_INFO_DETAIL"
]
    }
  }
};