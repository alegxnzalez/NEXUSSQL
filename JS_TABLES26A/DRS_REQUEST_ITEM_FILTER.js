// DRS_REQUEST_ITEM_FILTER.js

window.DRS_REQUEST_ITEM_FILTER = {
  "tables": {
    "DRS_REQUEST_ITEM_FILTER": {
      "columns": {
        "REQUEST_ID": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "The parent item request ID."
},
        "ITEM_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "The parent item number."
},
        "RANGE_AFTER": {
          "type": "DATE",
          "nullable": true,
          "info": "A filter for insert or update dates after this date."
},
        "RANGE_BEFORE": {
          "type": "DATE",
          "nullable": true,
          "info": "A filter for insert or update dates before this date."
},
        "IS_EXCLUDE_PUBLIC": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "PUBLIC data should be excluded if Y (default for all items)."
},
        "FILTER_CRITERIA": {
          "type": "CLOB",
          "nullable": true,
          "info": "The JSON query definition."
},
        "PARTITION_KEY": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The partition key for the purge process."
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