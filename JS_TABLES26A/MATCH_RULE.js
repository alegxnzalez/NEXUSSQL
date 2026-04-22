// MATCH_RULE.js

window.MATCH_RULE = {
  "tables": {
    "MATCH_RULE": {
      "columns": {
        "MATCH_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "MATCH_RULE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID"
},
        "MATCH_RULE_DESC": {
          "type": "VARCHAR2(120)",
          "nullable": true
},
        "MATCH_RULE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true
},
        "SOURCE_LOCATION_RULE": {
          "type": "VARCHAR2(1)",
          "nullable": false
},
        "DEST_LOCATION_RULE": {
          "type": "VARCHAR2(1)",
          "nullable": false
},
        "RULE_TYPE": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "values": [
                    "CONSOLIDATED",
                    "NON-CONSOLIDATED",
                    "BOTH"
          ]
},
        "FIND_SHIPMENTS_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "B",
                    "S",
                    "A"
          ]
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
},
        "MATCH_RULE_TYPE": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "values": [
                    "INVOICE",
                    "INVOICE_LINEITEM"
          ],
          "info": "This field identifies if the match rules is for matching invoice or invoice tracking number."
},
        "MATCH_RULE_OUTCOME": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "values": [
                    "SHIPMENT",
                    "S_SHIP_UNIT",
                    "S_SHIP_UNIT_LINE",
                    "SHIP_GROUP"
          ],
          "info": "match rule outcome indicate with which entity business object it should be matched with. Possible values are shipment, ship unit and ship unit line."
},
        "REFNUM_QUALS_MATCH_ALL": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "This columns specifies if we have to match all of the refnum qualifiers provided or not. Y specifies that we have to match all and Value 'N' means match any one of the qualifier."
},
        "SERVPROV_EXACT_MATCH": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "This columns specifies if we have to match the alias qualifer and alias value of the invoice service provider with that of shipment service provider or not. If the value is 'N' it means that the shipments service provider tshould match one of the service provider provided in the table MATCH_RULE_SERVPOV for this match rule."
}
      },
      "fk_tables": [
        "MATCH_RULE_PROFILE_D",
        "MATCH_RULE_REFNUM",
        "MATCH_RULE_SERVPROV"
]
    }
  }
};