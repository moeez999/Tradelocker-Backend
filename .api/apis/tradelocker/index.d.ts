import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    auth(...values: string[] | number[]): this;
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    server(url: string, variables?: {}): void;
    /**
     * Get user details.
     *
     * @throws FetchError<400, types.UsersControllerGetUserDetailsResponse400>
     * @throws FetchError<403, types.UsersControllerGetUserDetailsResponse403>
     * @throws FetchError<404, types.UsersControllerGetUserDetailsResponse404>
     */
    usersController_getUserDetails(body: types.UsersControllerGetUserDetailsBodyParam): Promise<FetchResponse<200, types.UsersControllerGetUserDetailsResponse200>>;
    /**
     * Check if user email already exists.
     *
     * @throws FetchError<400, types.UsersControllerGetUsersByEmailResponse400>
     * @throws FetchError<403, types.UsersControllerGetUsersByEmailResponse403>
     * @throws FetchError<404, types.UsersControllerGetUsersByEmailResponse404>
     */
    usersController_getUsersByEmail(body: types.UsersControllerGetUsersByEmailBodyParam): Promise<FetchResponse<200, types.UsersControllerGetUsersByEmailResponse200>>;
    /**
     * Get details for all users.
     * Offset and limit are optional parameters.
     *
     * @throws FetchError<400, types.UsersControllerGetUsersByBrandIdResponse400>
     * @throws FetchError<403, types.UsersControllerGetUsersByBrandIdResponse403>
     */
    usersController_getUsersByBrandId(body: types.UsersControllerGetUsersByBrandIdBodyParam): Promise<FetchResponse<200, types.UsersControllerGetUsersByBrandIdResponse200>>;
    /**
     * Create a user in TradeLocker system.
     *
     * @throws FetchError<400, types.UsersControllerCreateUserResponse400>
     * @throws FetchError<403, types.UsersControllerCreateUserResponse403>
     */
    usersController_createUser(body: types.UsersControllerCreateUserBodyParam, metadata?: types.UsersControllerCreateUserMetadataParam): Promise<FetchResponse<201, types.UsersControllerCreateUserResponse201> | FetchResponse<number, types.UsersControllerCreateUserResponseDefault>>;
    /**
     * Set new password for selected user Id.
     *
     * @throws FetchError<400, types.UsersControllerSetPasswordResponse400>
     * @throws FetchError<403, types.UsersControllerSetPasswordResponse403>
     * @throws FetchError<404, types.UsersControllerSetPasswordResponse404>
     */
    usersController_setPassword(body: types.UsersControllerSetPasswordBodyParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Set new email for selected user Id.
     *
     * @throws FetchError<400, types.UsersControllerSetEmailResponse400>
     * @throws FetchError<403, types.UsersControllerSetEmailResponse403>
     * @throws FetchError<404, types.UsersControllerSetEmailResponse404>
     */
    usersController_setEmail(body: types.UsersControllerSetEmailBodyParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get all accounts for a user.
     *
     * @throws FetchError<400, types.AccountControllerGetAccountsResponse400>
     * @throws FetchError<403, types.AccountControllerGetAccountsResponse403>
     */
    accountController_getAccounts(body: types.AccountControllerGetAccountsBodyParam): Promise<FetchResponse<200, types.AccountControllerGetAccountsResponse200>>;
    /**
     * Get single account details.
     *
     * @throws FetchError<400, types.AccountControllerGetAccountDetailsResponse400>
     * @throws FetchError<403, types.AccountControllerGetAccountDetailsResponse403>
     */
    accountController_getAccountDetails(body: types.AccountControllerGetAccountDetailsBodyParam): Promise<FetchResponse<200, types.AccountControllerGetAccountDetailsResponse200>>;
    /**
     * Get all accounts for a brand.
     * Offset and limit are optional parameters.
     *
     * @throws FetchError<400, types.AccountControllerGetAllAccountsForBrandResponse400>
     * @throws FetchError<403, types.AccountControllerGetAllAccountsForBrandResponse403>
     */
    accountController_getAllAccountsForBrand(body: types.AccountControllerGetAllAccountsForBrandBodyParam): Promise<FetchResponse<200, types.AccountControllerGetAllAccountsForBrandResponse200>>;
    /**
     * Create a new Tradelocker account for specified user.
     *
     * @throws FetchError<400, types.AccountControllerCreateAccountResponse400>
     * @throws FetchError<403, types.AccountControllerCreateAccountResponse403>
     */
    accountController_createAccount(body: types.AccountControllerCreateAccountBodyParam, metadata?: types.AccountControllerCreateAccountMetadataParam): Promise<FetchResponse<201, types.AccountControllerCreateAccountResponse201> | FetchResponse<number, types.AccountControllerCreateAccountResponseDefault>>;
    /**
     * Activate an existing TradeLocker account.
     *
     * @throws FetchError<400, types.AccountControllerActivateAccountResponse400>
     * @throws FetchError<403, types.AccountControllerActivateAccountResponse403>
     */
    accountController_activateAccount(body: types.AccountControllerActivateAccountBodyParam): Promise<FetchResponse<200, types.AccountControllerActivateAccountResponse200>>;
    /**
     * Restricts an existing TradeLocker account. Restricted accounts cannot open positions.
     *
     * @throws FetchError<400, types.AccountControllerRestrictAccountResponse400>
     * @throws FetchError<403, types.AccountControllerRestrictAccountResponse403>
     */
    accountController_restrictAccount(body: types.AccountControllerRestrictAccountBodyParam): Promise<FetchResponse<200, types.AccountControllerRestrictAccountResponse200>>;
    /**
     * Suspend an existing TradeLocker account. Trading is prohibited for suspended accounts
     * and they do not show up in the TradeLocker application.
     *
     * @throws FetchError<400, types.AccountControllerSuspendAccountResponse400>
     * @throws FetchError<403, types.AccountControllerSuspendAccountResponse403>
     */
    accountController_suspendAccount(body: types.AccountControllerSuspendAccountBodyParam): Promise<FetchResponse<200, types.AccountControllerSuspendAccountResponse200>>;
    /**
     * Set new group for specified account.
     *
     * @throws FetchError<400, types.AccountControllerChangeUserGroupResponse400>
     * @throws FetchError<403, types.AccountControllerChangeUserGroupResponse403>
     */
    accountController_changeUserGroup(body: types.AccountControllerChangeUserGroupBodyParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Order closing of all positions for specified account.
     *  After submitting a request, call open positions endpoint to ensure that all positions
     * were closed successfully.
     *
     * @throws FetchError<400, types.AccountControllerCloseAllPositionsResponse400>
     * @throws FetchError<403, types.AccountControllerCloseAllPositionsResponse403>
     * @throws FetchError<404, types.AccountControllerCloseAllPositionsResponse404>
     * @throws FetchError<500, types.AccountControllerCloseAllPositionsResponse500>
     */
    accountController_closeAllPositions(body: types.AccountControllerCloseAllPositionsBodyParam): Promise<FetchResponse<200, types.AccountControllerCloseAllPositionsResponse200>>;
    /**
     * Cancel all orders for specified account.
     *  After submitting a request, call all orders endpoint to ensure that all orders were
     * closed successfully.
     *
     * @throws FetchError<400, types.AccountControllerCancelAllOrdersResponse400>
     * @throws FetchError<403, types.AccountControllerCancelAllOrdersResponse403>
     * @throws FetchError<404, types.AccountControllerCancelAllOrdersResponse404>
     * @throws FetchError<500, types.AccountControllerCancelAllOrdersResponse500>
     */
    accountController_cancelAllOrders(body: types.AccountControllerCancelAllOrdersBodyParam): Promise<FetchResponse<200, types.AccountControllerCancelAllOrdersResponse200>>;
    /**
     * Deposit funds to specified account of a user. The ID of the resulting operation is not
     * unique across account types (LIVE,DEMO).
     *
     * @throws FetchError<400, types.AccountOperationsControllerDepositToAccountResponse400>
     * @throws FetchError<403, types.AccountOperationsControllerDepositToAccountResponse403>
     */
    accountOperationsController_depositToAccount(body: types.AccountOperationsControllerDepositToAccountBodyParam, metadata?: types.AccountOperationsControllerDepositToAccountMetadataParam): Promise<FetchResponse<200, types.AccountOperationsControllerDepositToAccountResponse200> | FetchResponse<number, types.AccountOperationsControllerDepositToAccountResponseDefault>>;
    /**
     * Withdraw funds from specified account of a user. The ID of the resulting operation is
     * not unique across account types (LIVE,DEMO).
     *
     * @throws FetchError<400, types.AccountOperationsControllerWithdrawFromAccountResponse400>
     * @throws FetchError<403, types.AccountOperationsControllerWithdrawFromAccountResponse403>
     */
    accountOperationsController_withdrawFromAccount(body: types.AccountOperationsControllerWithdrawFromAccountBodyParam, metadata?: types.AccountOperationsControllerWithdrawFromAccountMetadataParam): Promise<FetchResponse<200, types.AccountOperationsControllerWithdrawFromAccountResponse200> | FetchResponse<number, types.AccountOperationsControllerWithdrawFromAccountResponseDefault>>;
    /**
     * Add or remove credit to specified account of a user. The ID of the resulting operation
     * is not unique across account types (LIVE,DEMO).
     *
     * @throws FetchError<400, types.AccountOperationsControllerAddCreditToAccountResponse400>
     * @throws FetchError<403, types.AccountOperationsControllerAddCreditToAccountResponse403>
     */
    accountOperationsController_addCreditToAccount(body: types.AccountOperationsControllerAddCreditToAccountBodyParam, metadata?: types.AccountOperationsControllerAddCreditToAccountMetadataParam): Promise<FetchResponse<200, types.AccountOperationsControllerAddCreditToAccountResponse200> | FetchResponse<number, types.AccountOperationsControllerAddCreditToAccountResponseDefault>>;
    /**
     * Default API route with basic service information.
     *
     */
    homeController_appInfo(): Promise<FetchResponse<number, unknown>>;
    /**
     * API liveness check
     *
     */
    homeController_alive(): Promise<FetchResponse<200, types.HomeControllerAliveResponse200>>;
    /** @throws FetchError<503, types.HomeControllerReadonlyResponse503> The Health Check is not successful */
    homeController_readonly(): Promise<FetchResponse<200, types.HomeControllerReadonlyResponse200>>;
    /**
     * Get all instruments for account type.
     *
     * @throws FetchError<400, types.BrandControllerGetInstrumentsResponse400>
     * @throws FetchError<403, types.BrandControllerGetInstrumentsResponse403>
     * @throws FetchError<500, types.BrandControllerGetInstrumentsResponse500>
     */
    brandController_getInstruments(body: types.BrandControllerGetInstrumentsBodyParam): Promise<FetchResponse<200, types.BrandControllerGetInstrumentsResponse200>>;
    /**
     * Get all assets for account type.
     *
     * @throws FetchError<400, types.BrandControllerGetAssetsResponse400>
     * @throws FetchError<403, types.BrandControllerGetAssetsResponse403>
     * @throws FetchError<500, types.BrandControllerGetAssetsResponse500>
     */
    brandController_getAssets(body: types.BrandControllerGetAssetsBodyParam): Promise<FetchResponse<200, types.BrandControllerGetAssetsResponse200>>;
    /**
     * Get all billable accounts for specified day. Each account will contain a list of events
     * that marks this account as active in a selected day.
     *
     * @throws FetchError<400, types.BrandControllerGetActiveAccountsByDayResponse400>
     * @throws FetchError<403, types.BrandControllerGetActiveAccountsByDayResponse403>
     * @throws FetchError<500, types.BrandControllerGetActiveAccountsByDayResponse500>
     */
    brandController_getActiveAccountsByDay(body: types.BrandControllerGetActiveAccountsByDayBodyParam): Promise<FetchResponse<200, types.BrandControllerGetActiveAccountsByDayResponse200>>;
    /**
     * Get all billable accounts for specified month. Each account will contain a list of
     * events that marks this account as active for the whole monthly period.
     *
     * @throws FetchError<400, types.BrandControllerGetActiveAccountsByMonthResponse400>
     * @throws FetchError<403, types.BrandControllerGetActiveAccountsByMonthResponse403>
     * @throws FetchError<500, types.BrandControllerGetActiveAccountsByMonthResponse500>
     */
    brandController_getActiveAccountsByMonth(body: types.BrandControllerGetActiveAccountsByMonthBodyParam): Promise<FetchResponse<200, types.BrandControllerGetActiveAccountsByMonthResponse200>>;
    /**
     * Get all orders.
     *
     * @throws FetchError<400, types.OrdersControllerGetAllOrdersResponse400>
     * @throws FetchError<403, types.OrdersControllerGetAllOrdersResponse403>
     * @throws FetchError<500, types.OrdersControllerGetAllOrdersResponse500>
     */
    ordersController_getAllOrders(body: types.OrdersControllerGetAllOrdersBodyParam): Promise<FetchResponse<200, types.OrdersControllerGetAllOrdersResponse200>>;
    /**
     * Cancel order.
     *
     * @throws FetchError<400, types.OrdersControllerCancelOrderResponse400>
     * @throws FetchError<403, types.OrdersControllerCancelOrderResponse403>
     * @throws FetchError<404, types.OrdersControllerCancelOrderResponse404>
     * @throws FetchError<409, types.OrdersControllerCancelOrderResponse409>
     * @throws FetchError<500, types.OrdersControllerCancelOrderResponse500>
     */
    ordersController_cancelOrder(body: types.OrdersControllerCancelOrderBodyParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get all open positions. Positions are sorted by open timestamp in reverse-chronological
     * order, so that the first position is the most recently opened one.
     *
     * @throws FetchError<400, types.PositionsControllerGetOpenPositionsResponse400>
     * @throws FetchError<403, types.PositionsControllerGetOpenPositionsResponse403>
     */
    positionsController_getOpenPositions(body: types.PositionsControllerGetOpenPositionsBodyParam): Promise<FetchResponse<200, types.PositionsControllerGetOpenPositionsResponse200>>;
    /**
     * Close open position by positionId.
     *
     * @throws FetchError<400, types.PositionsControllerClosePositionResponse400>
     * @throws FetchError<403, types.PositionsControllerClosePositionResponse403>
     * @throws FetchError<404, types.PositionsControllerClosePositionResponse404>
     * @throws FetchError<500, types.PositionsControllerClosePositionResponse500>
     */
    positionsController_closePosition(body: types.PositionsControllerClosePositionBodyParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get the account statement report for accounts of a brand. If no accountIds are provided,
     * get the report for all accounts of a brand. Optionally, one can filter accounts by
     * account status (e.g. ACTIVE, SUSPENDED, etc.).
     *
     * @throws FetchError<400, types.ReportsControllerGetAccountStatementReportResponse400>
     * @throws FetchError<403, types.ReportsControllerGetAccountStatementReportResponse403>
     */
    reportsController_getAccountStatementReport(body: types.ReportsControllerGetAccountStatementReportBodyParam): Promise<FetchResponse<200, types.ReportsControllerGetAccountStatementReportResponse200>>;
    /**
     * Get the trades history report for all accounts of a brand.
     *
     * @throws FetchError<400, types.ReportsControllerGetTradesHistoryReportResponse400>
     * @throws FetchError<403, types.ReportsControllerGetTradesHistoryReportResponse403>
     */
    reportsController_getTradesHistoryReport(body: types.ReportsControllerGetTradesHistoryReportBodyParam): Promise<FetchResponse<200, types.ReportsControllerGetTradesHistoryReportResponse200>>;
    /**
     * Get the close trades events for a single account. Pagination is cursor based, and the
     * events are sorted in descending order by the close time. The report is limited to 20
     * events per request. If the number of events exceeds 20, the response will contain a
     * cursor to fetch the next page of events. The cursor is a string that should be passed as
     * a query parameter `cursor` in the next request to fetch the next page of events. If the
     * cursor is not provided, the first page of events will be returned containing the most
     * recent events.
     *
     * @throws FetchError<400, types.ReportsControllerGetCloseTradesHistoryReportResponse400>
     * @throws FetchError<403, types.ReportsControllerGetCloseTradesHistoryReportResponse403>
     */
    reportsController_getCloseTradesHistoryReport(body: types.ReportsControllerGetCloseTradesHistoryReportBodyParam): Promise<FetchResponse<200, types.ReportsControllerGetCloseTradesHistoryReportResponse200>>;
    /**
     * Get the users activities report for all accounts of a brand. Limit is 1000000 items. The
     * range between startDateTime and endDateTime can be a maximum of 30 days. The data
     * fetched by this endpoint is not real-time but is periodically updated at predefined
     * intervals.
     *
     * @throws FetchError<400, types.ReportsControllerGetUsersActivitiesReportResponse400>
     * @throws FetchError<401, types.ReportsControllerGetUsersActivitiesReportResponse401>
     * @throws FetchError<403, types.ReportsControllerGetUsersActivitiesReportResponse403>
     * @throws FetchError<500, types.ReportsControllerGetUsersActivitiesReportResponse500>
     * @throws FetchError<501, types.ReportsControllerGetUsersActivitiesReportResponse501>
     */
    reportsController_getUsersActivitiesReport(body: types.ReportsControllerGetUsersActivitiesReportBodyParam): Promise<FetchResponse<200, types.ReportsControllerGetUsersActivitiesReportResponse200>>;
    /**
     * Retrieves the account operations history for account associated with a brand. Limit is
     * 100000 items. The range between startDateTime and endDateTime can be a maximum of 365
     * days. Optionally, operations can be filtered by operation types (e.g. TRADING, DEPOSIT,
     * WITHDRAW, COMMISSION, SWAP, BLOCKING, UNBLOCKING, ADJUSTMENT, SPREAD, CREDIT,
     * BALANCE_CREDIT).
     *
     * @throws FetchError<400, types.ReportsControllerGetAccountOperationsHistoryResponse400>
     * @throws FetchError<403, types.ReportsControllerGetAccountOperationsHistoryResponse403>
     */
    reportsController_getAccountOperationsHistory(body: types.ReportsControllerGetAccountOperationsHistoryBodyParam): Promise<FetchResponse<200, types.ReportsControllerGetAccountOperationsHistoryResponse200>>;
    /**
     * Get all groups of a brand.
     *
     * @throws FetchError<400, types.GroupsControllerGetGroupsResponse400>
     * @throws FetchError<403, types.GroupsControllerGetGroupsResponse403>
     */
    groupsController_getGroups(body: types.GroupsControllerGetGroupsBodyParam): Promise<FetchResponse<200, types.GroupsControllerGetGroupsResponse200>>;
}
declare const createSDK: SDK;
export = createSDK;
