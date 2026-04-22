// SECONDARY_CHARGE_RULE.js

window.SECONDARY_CHARGE_RULE = {
  "tables": {
    "SECONDARY_CHARGE_RULE": {
      "columns": {
        "SECONDARY_CHARGE_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "SECONDARY_CHARGE_RULE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "SPECIAL_SERVICE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SPECIAL_SERVICE_PROFILE",
          "info": "for a shipment special service or stop special service rule type, any profile specified here must be validated for the rule to be used"
},
        "LOCATION_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_PROFILE",
          "info": "applies to Stop Special Service rules; if specified, the location for the stop must be compatible with the profile"
},
        "DESCRIPTION": {
          "type": "VARCHAR2(120)",
          "nullable": true
},
        "TRANSPORT_MODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "TRANSPORT_MODE"
},
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": true
},
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true
},
        "X_LANE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "X_LANE"
},
        "MODE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "MODE_PROFILE"
},
        "ITINERARY_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ITINERARY_PROFILE"
},
        "RULE_TYPE": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "values": [
                    "S",
                    "G",
                    "SHIP_SPEC_SVC",
                    "STOP_SPEC_SVC",
                    "SHIP_STOP"
          ]
},
        "ROUTE_CODE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ROUTE_CODE_PROFILE",
          "info": "ROUTE_CODE_PROFILE_GID contains the unique identifier for the route code profile which is used to handle REBATE scenario."
},
        "CRITERIA_SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV",
          "info": "CRITERIA_SERVPROV_GID contains the unique identifier for the service provider which is used to handle REBATE scenario."
},
        "PORT_OF_LOAD_LOC_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_PROFILE",
          "info": "If set, shipments must match this port of load for secondary charge to apply"
},
        "PORT_OF_DIS_LOC_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_PROFILE",
          "info": "If set, shipments must match this port of discharge for secondary charge to apply"
},
        "LOCATION_TYPE": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "values": [
                    "SOURCE TO DEST",
                    "SOURCE",
                    "DEST",
                    "PORT OF LOAD",
                    "PORT OF DISCHARGE",
                    "STOP",
                    "ALL"
          ],
          "info": "How to set the location on the secondary charge shipment"
},
        "FLEX_COMMODITY_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "FLEX_COMMODITY_PROFILE"
},
        "QUANTITY_TYPE": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "values": [
                    "PLANNED",
                    "PICKED UP",
                    "RECEIVED",
                    "PLANNED PICKED UP",
                    "PLANNED RECEIVED"
          ],
          "info": "Use quantities planned, actual quantity picked up, actual quantity dropped off, planned picked up or planned dropped off."
},
        "PAYMENT_METHOD_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PAYMENT_METHOD_CODE",
          "info": "Payment method code to be copied to the secondary charge shipment."
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
        "RES_LOCATION_PROFILE_ID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "CRITERIA_RATE_OFFERING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_OFFERING",
          "info": "This field is for matching the RO of the shipment against which the rule is being run."
},
        "INVOLVED_PARTY_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "INVOLVED_PARTY_QUAL",
          "info": "This field is for matching the Involved Party Qualifier with the involved party qualifier on involved party contact record of the shipment against which the rule is being run."
},
        "CONTACT_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CONTACT_PROFILE",
          "info": "This field is for checking the compatibility of the contact profile with the contact on the involved party contact record of the shipment against which the rule is being run."
},
        "CALCULATE_SHIP_UNIT_DURATION": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "The flag determines if we have to calculate the ship unit dwell time for the ship units of the secondary charge created as a result of this rule."
},
        "PERSPECTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "B",
                    "S",
                    "A"
          ],
          "info": "This field is for specifying if the rule is meant for buy or sell shipments or both."
},
        "CRITERIA_RATE_GEO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_GEO",
          "info": "This field is for matching the RR of the shipment against which the rule is being run."
},
        "SHIPMENT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIPMENT_TYPE",
          "info": "This field is for matching the Shipment type of the shipment against which the rule is being run."
}
      },
      "fk_tables": [
        "DM_RULE_D",
        "DM_TRANSACTION_LINEITEM",
        "SC_COPY_REFNUM_QUAL",
        "SC_INVOLVED_PARTY",
        "SC_RULE_CONTRACT",
        "SC_RULE_PROFILE_D",
        "SHIPMENT",
        "SHIP_GROUP_SC_DEF"
]
    }
  }
};