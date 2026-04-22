// NFRC_RULE.js

window.NFRC_RULE = {
  "tables": {
    "NFRC_RULE": {
      "columns": {
        "NFRC_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Unique identifier for NFRC_RULE "
        },
        "NFRC_RULE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "CHARGE_RULE_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "A",
            "J",
            "O",
            "B",
            "S",
            "Q"
          ],
          "info": "Determines which sets of fields are displayed in the GUI and checked during charge rule application.  J = Job, O = Order, B = Buy Shipment, S = Sell Shipment, A = All "
        },
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Compared against the start time of the primary leg shipment in the job.  Used for all charge types. "
        },
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Compared against the start time of the primary leg shipment in the job.  Used for all charge types. "
        },
        "JOB_INVOLVED_PARTY_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "INVOLVED_PARTY_QUAL",
          "info": "Compared against the list of associated involved parties for the job.  Used for all charge types. "
        },
        "JOB_LOCATION_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_PROFILE",
          "info": "Compared against the contact locations for the involved parties of a job.  Used for all charge types. "
        },
        "OR_ORIGIN_REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REGION",
          "info": "Compared against the order source location of all orders in a job.  Used for O charge type. "
        },
        "OR_DESTINATION_REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REGION",
          "info": "Compared against the order destination location of all orders in a job.  Used for O charge type. "
        },
        "OR_ORDER_RELEASE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ORDER_RELEASE_TYPE",
          "info": "Compared against the order release type of all orders in a job.  Used for O charge type. "
        },
        "OR_MIN_TOTAL_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Compared against the summed total weight of all orders in a job.  Used for O charge type. "
        },
        "OR_MIN_TOTAL_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "OR_MIN_TOTAL_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "OR_MAX_TOTAL_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Compared against the summed total weight of all orders in a job.  Used for O charge type. "
        },
        "OR_MAX_TOTAL_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "OR_MAX_TOTAL_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "OR_MIN_TOTAL_VOLUME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Compared against the summed total volume of all orders in a job.  Used for O charge type. "
        },
        "OR_MIN_TOTAL_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "OR_MIN_TOTAL_VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "OR_MAX_TOTAL_VOLUME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Compared against the summed total volume of all orders in a job.  Used for O charge type. "
        },
        "OR_MAX_TOTAL_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "OR_MAX_TOTAL_VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "OR_TRANS_HANDLING_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_UNIT_SPEC",
          "info": "Compared against the transport handling units (ship unit specs) for all orders in a job.  Used for O charge type. "
        },
        "BUY_LOCATION_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_PROFILE",
          "info": "Compared against all buy shipment stop locations for all shipments in a job.  Used for B charge type. "
        },
        "BUY_MODE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "MODE_PROFILE",
          "info": "Compared against the transportation mode of the primary leg buy shipment.  Used for B charge type. "
        },
        "BUY_SERVPROV_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV_PROFILE"
        },
        "BUY_PORT_OF_LOAD_LOC_PROF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_PROFILE",
          "info": "Compared against the port of load on the primary leg buy shipment.  Used for B charge type. "
        },
        "BUY_PORT_OF_DSCH_LOC_PROF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_PROFILE",
          "info": "Compared against the port of discharge on the primary leg buy shipment.  Used for B charge type. "
        },
        "SELL_LOCATION_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_PROFILE",
          "info": "Compared against all sell shipment stop locations for all shipments in a job.  Used for S charge type. "
        },
        "SELL_MODE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "MODE_PROFILE",
          "info": "Compared against the transportation mode of the primary leg sell shipment.  Used for S charge type. "
        },
        "SELL_SERVPROV_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV_PROFILE",
          "info": "Compared against the service provider of the primary leg sell shipment.  Used for S charge type. "
        },
        "SELL_PORT_OF_LOAD_LOC_PROF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_PROFILE",
          "info": "Compared against the port of load on the primary leg sell shipment.  Used for S charge type. "
        },
        "SELL_PORT_OF_DSCH_LOC_PROF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_PROFILE",
          "info": "Compared against the port of discharged on the primary leg sell shipment.  Used for S charge type. "
        },
        "ACCESSORIAL_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ACCESSORIAL_CODE",
          "info": "Assigned to the shipment(s) as a shipment_accessorial.  Also, copied to the shipment_name field of the shipment(s). "
        },
        "PERSPECTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "B",
            "S"
          ],
          "info": "Perspective of the resulting shipment(s).  B = Buy, S = Sell, null = both (2 shipments, one Buy, one Sell) "
        },
        "IS_CALCULATE_COST": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Boolean indicator for whether or not to attemnpt to calculate the cost.  If true, the user interface will require a rate record id. "
        },
        "BUY_RATE_GEO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_GEO",
          "info": "The rate record used to calculate the buy shipment charge. "
        },
        "BUY_PAYMENT_METHOD_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PAYMENT_METHOD_CODE",
          "info": "The payment method code used with the buy shipment charge. "
        },
        "BUY_SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV",
          "info": "The service provider associated with the buy shipment charge.  Overrides the servprov specfied on the rate specified in buy_rate_geo_gid. "
        },
        "SELL_RATE_GEO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_GEO",
          "info": "The rate record used to calculate the sell shipment charge. "
        },
        "SELL_PAYMENT_METHOD_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PAYMENT_METHOD_CODE",
          "info": "The payment method code used with the sell shipment charge "
        },
        "SELL_SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV",
          "info": "The service provider associated with the sell shipment charge.  Overrides the servprov specified on the rate specified in sell_rate_geo_gid "
        },
        "JOB_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "JOB_TYPE"
        },
        "MOVE_PERSPECTIVE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "MOVE_PERSPECTIVE"
        },
        "BUY_GENERAL_LEDGER_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GENERAL_LEDGER_CODE",
          "info": "Code ID for the resulting buy shipments "
        },
        "SELL_GENERAL_LEDGER_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GENERAL_LEDGER_CODE",
          "info": "Code ID for the resulting sell shipments "
        },
        "GENERATION_TYPE": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "values": [
            "AUTO",
            "MANUAL",
            "BOTH",
            "AGENT"
          ],
          "info": "Defines if the rule should be considered by the NFRC rule engine or not "
        },
        "CONSOLIDATION_TYPE_PROF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CONSOLIDATION_TYPE_PROF",
          "info": "Consolidation type profile of matching jobs.  NULL means consolidation type doesn't matter. "
        },
        "JOB_COMMERCIAL_INVOICE_VALUE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "JOB_COMMERCIAL_IN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
        },
        "JOB_COMMERCIAL_INVOIC_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "JOB_DOCUMENT_DEF_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DOCUMENT_DEF_PROFILE"
        },
        "OR_INCO_TERM_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "INCO_TERM_PROFILE"
        },
        "OR_INV_PYMT_METH_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PAYMENT_METHOD_PROFILE"
        },
        "OR_CUST_DOMAIN_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DOMAIN_PROFILE"
        },
        "OR_PACKAGED_ITEM_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PACKAGED_ITEM_PROFILE"
        },
        "BUY_SHIP_UNIT_SPEC_PROF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_UNIT_SPEC_PROFILE"
        },
        "SELL_SHIP_UNIT_SPEC_PROF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_UNIT_SPEC_PROFILE"
        },
        "BUY_PYMT_METH_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PAYMENT_METHOD_PROFILE"
        },
        "SELL_PYMT_METH_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PAYMENT_METHOD_PROFILE"
        },
        "BUY_IS_HAZARDOUS": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ]
        },
        "SELL_IS_HAZARDOUS": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ]
        },
        "IS_PROFIT_SPLIT": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates the created NFRC shipment will be profit split or not."
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
        "NFRC_RULE_INV_PARTY",
        "NFRC_RULE_INV_PARTY_CRITERIA",
        "NFRC_RULE_JOB_INV_PARTY",
        "QUOTE_COST_OPTION_SHIPMENT",
        "SHIPMENT",
        "SHIPPING_AGENT_CONTACT"
      ]
    }
  }
};
