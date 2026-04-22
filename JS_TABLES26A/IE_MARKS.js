// IE_MARKS.js

window.IE_MARKS = {
  "tables": {
    "IE_MARKS": {
      "description": "The IE series of tables is a method to store the EDI information from a Blob into a more relational format. However these may change in ver 3.0.",
      "columns": {
        "I_REC_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true
},
        "I_TRANSACTION_NO": {
          "type": "NUMBER",
          "nullable": true
},
        "MARKS_NUMBER_QUALIFIER": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "MARKS_NUMBER_VALUE": {
          "type": "VARCHAR2(30)",
          "nullable": true
},
        "PARTITION_KEY": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Populated through a trigger, this key is used to determine into which partition this record should be inserted.  The formula is based upon the insert_date column and the frequency in which this table is associated (weekly, monthly, quarterly).  Valid values are 1-4."
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