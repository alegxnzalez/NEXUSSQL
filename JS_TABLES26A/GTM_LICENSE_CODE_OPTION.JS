// GTM_LICENSE_CODE_OPTION.js

window.GTM_LICENSE_CODE_OPTION = {
  "tables": {
    "GTM_LICENSE_CODE_OPTION": {
      "columns": {
        "GTM_LICENSE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_LICENSE_CODE"
},
        "GTM_LICENSE_CODE": {
          "type": "VARCHAR2(150)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_LICENSE_CODE"
},
        "GTM_TRANSACTION_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_TYPE_CODE"
},
        "GTM_TRANSACTION_CODE": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "foreign_key": "GTM_TYPE_CODE"
},
        "QUANTITY_BALANCE_METHOD": {
          "type": "VARCHAR2(15)",
          "nullable": false,
          "values": [
                    "INCREASE",
                    "DECREASE",
                    "NO_CHANGE"
          ]
},
        "VALUE_BALANCE_METHOD": {
          "type": "VARCHAR2(15)",
          "nullable": false,
          "values": [
                    "INCREASE",
                    "DECREASE",
                    "NO_CHANGE"
          ]
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
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "GTM_LICENSE_LINE_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": true
},
        "DATE_QUALIFIER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_DATE_QUALIFIER"
},
        "GTM_QUANTITY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_QUANTITY_TYPE",
          "info": "Quantity Type Gid indicates the transaction line quantity qualifier. The value of this transaction line is used to check the license limiting factor or update the quality or value balances."
},
        "GTM_VALUE_QUALIFIER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_VALUE_QUALIFIER",
          "info": "Value Qualifier Gid indicates the transaction line value qualifier. The value of this transaction line is used to check the license limiting factor or update the quality or value balances."
},
        "BALANCE_TYPE": {
          "type": "VARCHAR2(2)",
          "nullable": false,
          "values": [
                    "R",
                    "A"
          ],
          "info": "Possible value as 'Reservation', 'Assignment'. It indicates if License Reservation or Assignment needs to be performed."
},
        "GTM_TRANS_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_TRANSACTION_TYPE",
          "info": "Transaction Type Gid, 'Sales Order or Delivery etc'. One could use Transaction Type or the Use Defined Code to Model the License Code Tolerance and Balancing Method working."
},
        "GTM_LICENSE_CODE_SEQUENCE": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "A combination of gtm_license_code_sequence, gtm_license_type_gid and gtm_license_code uniquely identifies a License Code Option"
},
        "SAVED_QUERY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SAVED_QUERY",
          "info": "Saved Query is used to identify the prior license reservation details at a transaction line level and use the reserved amount for the current assignment/reservation"
},
        "GTM_CONSTRAINT_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_CONSTRAINT_SET",
          "info": "The constraints that should be evaluated when determining whether the License associated with the License Code can be applied."
}
      },
      "fk_tables": []
    }
  }
};