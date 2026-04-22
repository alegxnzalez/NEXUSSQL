// TRANSPORT_MODE.js

window.TRANSPORT_MODE = {
  "tables": {
    "TRANSPORT_MODE": {
      "columns": {
        "TRANSPORT_MODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "A unique identifier to define the transportation modes. (includes the domain name as part of the key) "
        },
        "TRANSPORT_MODE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "A unique identifier to define the transportation modes. (does not include the domain name as part of the key) "
        },
        "TRANSPORT_MODE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "The name/description of the transportation mode.  For example:  Air,  Barge,  Drayage,  Truckload,  Rail etc. "
        },
        "TRANSPORT_MODE_QUALIFIER": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
            "B",
            "S",
            "H"
          ],
          "info": "DISTINGUISHES THE TRANSPORTATION MODE AS EITHER A STANDARD TRANSPORT MODE, A HAZARDOUS TRANSPORT MODE OR BOTH.  VALUES: B=BOTH, S=STANDARD TRANSPORT MODE, H=HAZARDOUS TRANSPORT MODE. "
        },
        "PERFORM_SHIPPING_SPACE_CALC": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "COLOR": {
          "type": "VARCHAR2(7)",
          "nullable": false
        },
        "IS_MASTER_CARR_REF_REM_VISIBLE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Identifies whether the master carrier reference remark is displayed on the 'View Related Remarks' screen for this particular transportation mode. "
        },
        "CONDITIONAL_BOOKING_PROF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CONDITIONAL_BOOKING_PROFILE"
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
        "IS_CONSIDER_COST": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicate if cost should be considered (therefore rating is invoked) during ship unit building (packing). "
        },
        "THU_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_UNIT_SPEC_PROFILE",
          "info": "Specifies all compatible  THUs that can be used during ship unit building (packing)."
        },
        "MODE_TYPE": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "values": [
            "TL",
            "LTL",
            "PARCEL",
            "INTERMODAL",
            "RAIL",
            "AIR",
            "OCEAN",
            "DEFAULT"
          ]
        },
        "X12_FORMAT_CODE": {
          "type": "VARCHAR2(2)",
          "nullable": true
        },
        "ALLOW_REPACK": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        }
      },
      "fk_tables": [
        "BULK_PLAN_BY_MODE",
        "BULK_PLAN_PARTITION_BY_MODE",
        "BUYER_TEMPLATE",
        "CAPACITY_OVERRIDE_LINE",
        "CONSOL",
        "GTM_COMPLIANCE_RULE",
        "GTM_TRANSACTION",
        "HAZMAT_ITEM",
        "ITINERARY",
        "LG_QUANTITY_BREAK",
        "LOGISTICS_GUIDE_AGGREGATE_DATA",
        "LOGISTICS_GUIDE_DETAIL",
        "MODE_PROFILE_DETAIL",
        "OB_LEG_CONSTRAINT",
        "OB_ORDER_BASE",
        "ORDER_MOVEMENT",
        "ORDER_RELEASE",
        "ORDER_RELEASE_LEG_CONSTRAINT",
        "ORDER_ROUTING_RULE_D",
        "P_BID",
        "P_SHIPMENT",
        "QUOTE",
        "QUOTE_COST_OPTION_SHIPMENT",
        "RATE_OFFERING",
        "ROUTE_INSTANCE",
        "ROUTE_TEMPLATE",
        "SECONDARY_CHARGE_RULE",
        "SERVPROV_CB_PROFILE",
        "SHIPMENT",
        "TEXT_TEMPLATE_PROFILE"
      ]
    }
  }
};
