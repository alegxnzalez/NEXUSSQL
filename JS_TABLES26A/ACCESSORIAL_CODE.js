// ACCESSORIAL_CODE.js

window.ACCESSORIAL_CODE = {
  "tables": {
    "ACCESSORIAL_CODE": {
      "description": "This is the master table that holds various accessories required for transportation, pickup and delivery. An accessory differs from a special service in that the customer has to pay for using the accessories. An example of an accessory is a refrigerator unit in a truck, that is used to transport ice creams. The accessories defined can be linked at the item level or at the location level in GC3. The logic in GC3 checks to see if an accessory is required and thus, schedules and calculates the cost accordingly.",
      "columns": {
        "ACCESSORIAL_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "ACCESSORIAL_CODE_GID contains the unique identifier for the accessorial code used for the itinerary."
},
        "ACCESSORIAL_CODE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "ACCESSORIAL_CODE_XID contains the unique external identifier for the accessorial code used for the itinerary."
},
        "ACCESSORIAL_DESC": {
          "type": "VARCHAR2(120)",
          "nullable": false,
          "info": "ACCESSORIAL_DESC contains a description of the accessorial on an itinerary."
},
        "APPLY_GLOBALLY": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ]
},
        "IS_FLOW_THRU": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "IS_VAT_EXEMPT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
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
        "SEQUENCING_FACTOR": {
          "type": "NUMBER",
          "nullable": true,
          "info": "This column would specify the sequence number for the given accessorial code and it would be used for sequencing the rating of the accessorial while rating."
}
      },
      "fk_tables": [
        "ACCESSORIAL_CODE_PROFILE_D",
        "ACCESSORIAL_COST",
        "ACCESSORIAL_DEFAULT",
        "ALLOCATION_OB_LINE_D",
        "ALLOCATION_ORDER_RELEASE_D",
        "ALLOCATION_OR_LINE_D",
        "ALLOCATION_RULE_DETAIL",
        "BILL_TO_PARTY_ASSIGNMENT_D",
        "ESG_ACTIVITY",
        "ESG_ACTIVITY_DETAIL",
        "ESG_ACTIVITY_RULE",
        "INVOICE_LINEITEM",
        "INVOICE_SUMMARY_DETAIL",
        "ITEM_ACCESSORIAL",
        "KEWILL_CHARGE_TOKEN_SET",
        "KWLL_CHG_TKN_ACCCODE_JOIN",
        "LINE_APPROVE_TOLERANCE_DETAIL",
        "LOCATION_ACCESSORIAL",
        "NFRC_RULE",
        "OB_ACCESSORIAL",
        "OB_SU_ACCESSORIAL",
        "ORDER_RELEASE_ACCESSORIAL",
        "ORDER_RELEASE_LINE_ACCESSORIAL",
        "PKG_ITEM_ACCESSORIAL",
        "P_LANE_ACCESSORIAL_DURATION",
        "QUOTE_COST_OPTION_SHIP_COST",
        "RATE_FACTOR_RULE",
        "RATE_GEO_ACCESSORIAL",
        "RATE_GEO_COST",
        "RATE_OFFERING_ACCESSORIAL",
        "RATE_SERVICE_ACCESSORIAL_TIME",
        "RG_SPECIAL_SERVICE_ACCESSORIAL",
        "RO_SPECIAL_SERVICE_ACCESSORIAL",
        "SHIPMENT_ACCESSORIAL",
        "SHIPMENT_COST",
        "SHIPMENT_INF_COST_D",
        "SHIP_UNIT_SPEC_ACC",
        "S_SHIP_UNIT_ACCESSORIAL",
        "S_SUL_ACCESSORIAL"
]
    }
  }
};